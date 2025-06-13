import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ValidateScreen() {
  const navigate = useNavigate();
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  useEffect(() => {
    const type = params?.get('type');

    if (type === '1' && params?.get('token') !== null) {
      localStorage.setItem('token', params?.get('token') ?? '');
      navigate('/home', { replace: true });
    }
  }, []);

  return <div>{'Payment Failed'}</div>;
}
