"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useProjects } from "@/context/ProjectsContext";

interface DeleteProjectDialogProps {
    projectId: number;
    onClose: () => void;
    open: boolean;
}

const DeleteProjectDialog = ({
    projectId,
    open,
    onClose,
}: DeleteProjectDialogProps) => {
    const { deleteProject } = useProjects();
    const dialogRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (open && dialogRef.current) {
            gsap.fromTo(
                dialogRef.current,
                { scale: 0.8, opacity: 0, y: -50 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
            );
        }
    }, [open]);

    const handleDelete = async () => {
        if (!projectId) return;

        await deleteProject(projectId);
        onClose();
    }
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div
                ref={dialogRef}
                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
            >
                <h2 className="text-xl font-bold mb-4">Delete Project</h2>
                <p className="text-gray-700 mb-6">
                    Are you sure you want to delete this project?
                </p>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition cursor-pointer"
                    >
                        No
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteProjectDialog;
