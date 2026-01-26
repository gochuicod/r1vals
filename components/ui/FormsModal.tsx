'use client';

import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './Button'; // Assuming you have this from your existing code

interface FormsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
}

export const FormsModal = ({ isOpen, onClose, type }: FormsModalProps) => {
  if (!isOpen) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-zinc-900 border border-white/20 p-8 rounded-lg shadow-2xl animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center gap-4">
          <div className={`p-3 rounded-full ${isSuccess ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
            {isSuccess ? <CheckCircle size={32} /> : <AlertCircle size={32} />}
          </div>

          <h3 className="text-xl font-bold text-white font-heading">
            {isSuccess ? 'Application Received!' : 'Something went wrong'}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed">
            {isSuccess 
              ? "We've received your details for the R1VALS Protocol. Our team will review your application and be in touch shortly." 
              : "We couldn't submit your form. Please check your connection and try again."}
          </p>

          <Button 
            className="w-full mt-2" 
            onClick={onClose}
            variant="default"
          >
            {isSuccess ? 'Done' : 'Try Again'}
          </Button>
        </div>
      </div>
    </div>
  );
};