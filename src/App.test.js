// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Calculadora/i);
    expect(titleElement).toBeInTheDocument();
});

test('displays error for unknown operation', () => {
    render(<App />);
    const resultElement = screen.getByText(/Unknown operation/i);
    expect(resultElement).toBeInTheDocument();
});
