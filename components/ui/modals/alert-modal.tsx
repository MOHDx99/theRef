import { useEffect, useState } from "react";
import { MoodalDialog } from "@/components/ui/modals/modal-dialog";
import { Button } from "@/components/ui/button";

interface AlertModalProps{
    isOpen:boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> =  ({
    isOpen,
    onClose,
    onConfirm,
    loading
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    },[])

    if (!isMounted) {
        return null;
    }

    return (
        <MoodalDialog
            title="Are you Sure?"
            description="This Action Can't be undone"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full" >
                <Button disabled={loading} variant='outline' onClick={onClose} >
                    Cancel
                </Button>
                <Button disabled={loading} variant='destructive' onClick={onConfirm} >
                    Continue  
                </Button>
            </div>

        </MoodalDialog>
    );
};