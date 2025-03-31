'use client';
import styles from '../styles/PasswordGenerator.module.css';

import { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const charsetLower = 'abcdefghijklmnopqrstuvwxyz';
    const charsetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charsetNumbers = '0123456789';
    const charsetSpecial = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let charset = charsetLower + charsetUpper;
    if (includeNumbers) charset += charsetNumbers;
    if (includeSpecialChars) charset += charsetSpecial;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
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
          />
        </label>
      </div>
      <button onClick={generatePassword}>Gerar Senha</button>
      <div>
        <p><strong>Senha Gerada:</strong> {password}</p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
