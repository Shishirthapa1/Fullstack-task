"use client";
import { useState } from "react";
import { useProjects } from "@/context/ProjectsContext";
import toast from "react-hot-toast";

export default function ProjectsPage() {
    const { projects, addProject, updateProject } = useProjects();
    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        imageUrl: "",
    });

    const handleAdd = async () => {
        if (!form.title || !form.description || !form.category) return;
        await addProject(form);
        setForm({ title: "", description: "", category: "", imageUrl: "" });
    };

    const logout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        toast.success("Logged Out Successfully")
        window.location.href = "/login";
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Projects Dashboard</h1>
                <button
                    onClick={logout}
                    className="bg-[red] text-white px-4 py-2 rounded-md hover:bg-[#c40505] transition cursor-pointer"
                >
                    Logout
                </button>
            </div>

            <div className="bg-white p-6 rounded shadow-md mb-8 flex flex-row flex-wrap gap-4">
                <input
                    type="text"
                    required
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="border p-2 rounded flex-1 focus:outline-none focus:ring-0"
                />
                <input
                    type="text"
                    placeholder="Description"
                    required
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="border p-2 rounded flex-1 focus:outline-none focus:ring-0"
                />
                <input
                    type="text"
                    placeholder="Category"
                    required
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="border p-2 rounded flex-1 focus:outline-none focus:ring-0"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    required
                    value={form.imageUrl}
                    onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                    className="border p-2 rounded flex-1 focus:outline-none focus:ring-0"
                />
                <button
                    onClick={handleAdd}
                    className="bg-[#228df9] text-white px-6 py-2 rounded hover:bg-[#0f6ecd] cursor-pointer transition"
                >
                    Add Project
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded shadow-md p-4 hover:shadow-xl transition relative flex flex-col"
                    >
                        {project.imageUrl && (
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded mb-3"
                            />
                        )}
                        <h2 className="text-xl font-semibold mb-1">Title: {project.title}</h2>
                        <p className="text-gray-700 mb-2">Description: {project.description}</p>
                        <p className="text-sm text-gray-500 mb-2">Category: {project.category}</p>
                        <p className="text-xs text-gray-400 mb-3">
                            Created: {new Date(project?.createdAt ?? Date.now()).toLocaleDateString()}
                        </p>

                        <button
                            onClick={() =>
                                updateProject(project.id, { title: project.title + " (Updated)" })
                            }
                            className="mt-auto bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm transition"
                        >
                            Quick Update
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
