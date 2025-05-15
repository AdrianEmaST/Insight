import { useState } from 'react';
import { useVerification } from '@/hooks/useVerification';

export function useConfirmCode(onSuccess?: () => void) {
  // Hook de bajo nivel que se comunica con backend
  const { verify, loading } = useVerification();

  const [code, setCode] = useState(Array(8).fill(''));

  const isComplete = code.every((char) => /^[A-Z0-9]$/.test(char));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value.toUpperCase().slice(0, 1);
    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);

    if (val && index < 7) {
      const next = document.getElementById(`code-${index + 1}`);
      next?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isComplete) return;

    const verificationCode = code.join('');
    const storedEmail = sessionStorage.getItem('signupEmail');

    if (!storedEmail) {
      console.error('No email en sessionStorage');
      return;
    }

    const success = await verify({ email: storedEmail, verificationCode });

    if (success) {
      onSuccess?.();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').slice(0, 8).toUpperCase();
    const newCode = paste.split('').slice(0, code.length);

    const paddedCode = [...newCode];
    while (paddedCode.length < code.length) {
      paddedCode.push('');
    }

    setCode(paddedCode);
  };

  return {
    code,
    isComplete,
    isLoading: loading,
    handleChange,
    handleSubmit,
    setCode, // Añadir la función setCode aquí
    handlePaste,
  };
}
