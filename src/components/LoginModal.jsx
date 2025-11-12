import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const LoginModal = ({ onClose, onSuccess }) => {
  const { logIn } = UserAuth();
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // try {
    //   await logIn(email, password);
    //   onSuccess?.();
    //   onClose?.();
    // } catch (err) {
    //   setError(err.message || 'Failed to sign in');
    // }
  };

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Backdrop (click to close) */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 w-full h-full bg-black/60"
      />
      {/* Modal */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-[450px] bg-black/90 text-white rounded-lg shadow-xl">
          <div className="px-8 py-10">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Recommended movies</h1>
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-white"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {error && (
              <p className="p-3 bg-red-500/70 rounded mb-4 text-sm">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                className="w-full p-3 bg-gray-700 rounded"
                type="number"
                placeholder="User"
                autoComplete="user_id"
                value={user_id}
                onChange={(e) => setUser_id(e.target.value)}
                required
              />
              <button className="w-full bg-red-600 py-3 rounded font-bold">
                Get recommendations
              </button>
            </form>

            {/* <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-red-600" />
                Remember me
              </label>
              <button className="hover:underline">Need Help?</button>
            </div> */}

            <p className="text-center mt-8 text-sm">
              <span className="text-gray-400">New to Nextflix?</span>{' '}
              <span className="underline underline-offset-4">Get to know us</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
