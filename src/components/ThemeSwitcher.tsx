import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('statements');

  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove('statements', 'premium', 'modern', 'cyberpunk');
    // Set new theme
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add(theme);
  }, [theme]);

  const themes = [
    { id: 'statements', icon: '🌿', label: 'Statements' },
    { id: 'premium', icon: '💎', label: 'Premium' },
    { id: 'modern', icon: '🌟', label: 'Modern' },
    { id: 'cyberpunk', icon: '🤖', label: 'Cyber' }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2 flex-wrap justify-end">
      {themes.map(({ id, icon, label }) => (
        <Button
          key={id}
          onClick={() => setTheme(id)}
          className={`btn-premium transition-all duration-300 ${
            theme === id 
              ? 'ring-2 ring-[hsl(var(--accent-primary))] scale-105' 
              : 'opacity-75 hover:opacity-100'
          }`}
        >
          {icon} {label}
        </Button>
      ))}
    </div>
  );
} 