'use client';

import { useState, useEffect } from 'react';
import { Language, detectLanguage } from '@/lib/i18n';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    setLanguage(detectLanguage());
  }, []);

  return { language, setLanguage };
}
