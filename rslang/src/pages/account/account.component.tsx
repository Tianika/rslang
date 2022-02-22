import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../../features/login';
import { Signup } from '../../features/signup';

export const Account: React.FC = () => (
  <div>
    <Routes>
      <Route path="/account/login" element={<Login />} />
      <Route path="/account/signup" element={<Signup />} />
    </Routes>
  </div>
);
