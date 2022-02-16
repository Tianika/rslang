import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Login } from '../../features/login';
import { ContainerButton, TabEntrance, TabRecord } from '../../features/login/styles';
import { Signup } from '../../features/signup';

export const Account: React.FC = (props) => (
  <div>
    <Routes>
      <Route path="/account/login" element={<Login />} />
      <Route path="/account/signup" element={<Signup />} />
    </Routes>
  </div>
);
