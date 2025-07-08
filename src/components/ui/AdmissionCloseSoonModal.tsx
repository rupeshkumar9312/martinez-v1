import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AdmissionCloseSoonModalProps {
    open: boolean;
    onClose: () => void;
}

const AdmissionCloseSoonModal: React.FC<AdmissionCloseSoonModalProps> = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative text-center">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="mb-4">
          <span className="inline-block bg-yellow-400 text-black font-bold px-4 py-1 rounded-full text-sm mb-2">
            Hurry Up!
          </span>
                    <h3 className="text-2xl font-primary-bold text-primary mb-2">
                        Admissions Closing Soon
                    </h3>
                    <p className="text-text-black/70 font-primary-regular mb-6">
                        Limited seats available for the upcoming session. Apply now to secure your child’s future!
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-primary-bold">
                        <Link to="/admissions" onClick={onClose}>
                            Apply Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCloseSoonModal;