"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useProjects } from "@/context/ProjectsContext";

export interface ProjectType {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl?: string;
}

interface EditProjectDialogProps {
    project: ProjectType;
    onClose: () => void;
    open: boolean;
}

const EditProjectDialog = ({
    open,
    project,
    onClose,
}: EditProjectDialogProps) => {
    const { updateProject } = useProjects();

    const [form, setForm] = useState({
        title: project.title,
        description: project.description,
        category: project.category,
        imageUrl: project.imageUrl || "",
    });

    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setForm({
            title: project.title,
            description: project.description,
            category: project.category,
            imageUrl: project.imageUrl || "",
        });
    }, [project]);

    useEffect(() => {
        if (open && dialogRef.current) {
            gsap.fromTo(
                dialogRef.current,
                { opacity: 0, scale: 0.8, y: -50 },
                { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
            );
        }
    }, [open]);

    const handleSubmit = async () => {
        if (!form.title || !form.description || !form.category) return;

        await updateProject(project.id, form);
        onClose();

    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div
                ref={dialogRef}
                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
            >
                <h2 className="text-xl font-bold mb-4 font-abeezee">Edit Project</h2>

                <div className="mb-3">
                    <label className="block mb-1 text-sm font-abeezee text-gray-700">Title</label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="border p-2 w-full rounded font-abeezee"
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1 text-sm font-abeezee text-gray-700">Description</label>
                    <input
                        type="text"
                        placeholder="Enter description"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="border p-2 w-full rounded font-abeezee"
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1 text-sm font-abeezee text-gray-700">Category</label>
                    <input
                        type="text"
                        placeholder="Enter category"
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="border p-2 w-full rounded font-abeezee"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-abeezee text-gray-700">Image URL</label>
                    <input
                        type="text"
                        placeholder="Enter image URL"
                        value={form.imageUrl}
                        onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                        className="border p-2 w-full rounded font-abeezee"
                    />
                </div>


                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded bg-[#e91414] hover:bg-[#d51414] text-white cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded bg-[#228df9] text-white hover:bg-[#0f6ecd] cursor-pointer"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProjectDialog;
