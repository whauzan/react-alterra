import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import FormCoding from './FormCoding';
 
describe('FormPage', () => {
  test('renders Form component', () => {
    render(<FormCoding />);
    expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  test('input text for name and email with false value', () => {
    render(<FormCoding />);
    
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Wahyu13' },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'Battle Sage' },
    });
    
    expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Wahyu13');
    expect(screen.getByLabelText(/Email/)).toHaveValue('Battle Sage');
  });

  test('input text for ideal value', () => {
    render(<FormCoding />);
    
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Wahyu' },
    });
    
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'Wahyu@mail.com' },
    });
    
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Wahyu');
    expect(screen.getByLabelText(/Email/)).toHaveValue('Wahyu@mail.com');
  });

  test('submit button with error', () => {
    render(<FormCoding />);
    
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Wahyu' },
    });
    
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'emailmail.com' },
    });
    
    fireEvent.submit(screen.getByText("Submit"))
    
    expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Wahyu');
    expect(screen.getByLabelText(/Email/)).toHaveValue('emailmail.com');
  });

  test('submit button with ideal value', () => {
    render(<FormCoding />);
    
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: 'Wahyu' },
    });
    
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: 'Wahyu@mail.com' },
    });
    
    fireEvent.input(screen.getByRole("spinbutton", { name: /noHandphone/i }), {
      target: { value: 123456789 },
    });
    
    fireEvent.submit(screen.getByText("Submit"))
    
    expect(window.alert).toBeCalledWith(`Data Pendaftar "Wahyu" Berhasil Diterima`);
    expect(screen.getByLabelText(/Nama/)).toHaveValue('Wahyu');
    expect(screen.getByLabelText(/Email/)).toHaveValue('Wahyu@mail.com');
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123456789);
  });
});