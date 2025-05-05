'use client';

import { useEffect } from 'react';

export default function BodyClassManager() {
  useEffect(() => {
    document.body.classList.add('device-xl', 'has-plugin-easing', 'has-plugin-bootstrap');

    return () => {
      document.body.classList.remove('device-xl', 'has-plugin-easing', 'has-plugin-bootstrap');
    };
  }, []);

  return null;
}
