'use client';

import { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [easyMode, setEasyMode] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState<string[]>([]);

  const generatePassword = () => {
    let charset;
    if (easyMode) {
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    } else {
      const charsetLower = 'abcdefghijklmnopqrstuvwxyz';
      const charsetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const charsetNumbers = '0123456789';
      const charsetSpecial = '!@#$%^&*()_+[]{}|;:,.<>?';
      charset = charsetLower + charsetUpper;
      if (includeNumbers) charset += charsetNumbers;
      if (includeSpecialChars) charset += charsetSpecial;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setSavedPasswords((prev: string[]) => [...prev, generatedPassword]);
  };

  return (
    <div>
      <h2>Gerador de Senha</h2>
      <div>
        <label>
          Comprimento:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min="6"
            max="20"
          />
        </label>
      </div>
      <div>
        <label>
          Incluir Números:
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            disabled={easyMode}
          />
        </label>
      </div>
      <div>
        <label>
          Incluir Caracteres Especiais:
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            disabled={easyMode}
          />
        </label>
      </div>
      <div>
        <label>
          Modo Fácil:
          <input
            type="checkbox"
            checked={easyMode}
            onChange={(e) => setEasyMode(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={generatePassword}>Gerar Senha</button>
      <div>
        <p><strong>Senha Gerada:</strong> {password}</p>
      </div>
      <div>
        <h3>Senhas Geradas</h3>
        <ul>
          {savedPasswords.map((savedPassword, index) => (
            <li key={index}>{savedPassword}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordGenerator;
