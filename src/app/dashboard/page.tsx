"use client";
import { useState } from "react";
import { useProjects } from "@/context/ProjectsContext";
import toast from "react-hot-toast";
import EditProjectDialog, { ProjectType } from "@/components/EditProjectDialog";
import DeleteProjectDialog from "@/components/DeleteProjectDialog";
import Image from "next/image";

export default function ProjectsPage() {
    const { projects, addProject } = useProjects();
    const [editProject, setEditProject] = useState<boolean>(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

    const [selectedProject, setSelectedProject] = useState<ProjectType>();
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
        <div className="p-5 md:p-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 font-abeezee">Projects Dashboard</h1>
                <button
                    onClick={logout}
                    className="bg-[red] text-white px-4 py-2 rounded-md hover:bg-[#c40505] transition cursor-pointer lg:text-base md:text-sm text-xs"
                >
                    Logout
                </button>
            </div>

            <div className="bg-[#f8f8f8] p-6 rounded shadow-md mb-8 flex flex-row flex-wrap gap-4">
                <input
                    type="text"
                    required
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="border p-2 rounded flex-1 focus:outline-none focus:ring-0 text-xs md:text-sm lg:text-base"
                />
                <input
                    type="text"
                    placeholder="Description"
                    required
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="border text-xs md:text-sm lg:text-base p-2 rounded flex-1 focus:outline-none focus:ring-0"
                />
                <input
                    type="text"
                    placeholder="Category"
                    required
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="border text-xs md:text-sm lg:text-base p-2 rounded flex-1 focus:outline-none focus:ring-0"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    required
                    value={form.imageUrl}
                    onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                    className="border text-xs md:text-sm lg:text-base p-2 rounded flex-1 focus:outline-none focus:ring-0"
                />
                <button
                    onClick={handleAdd}
                    className="bg-[#228df9] text-white px-4 md:px-6 py-2 rounded hover:bg-[#0f6ecd] text-xs md:text-sm lg:text-base cursor-pointer transition"
                >
                    Add Project
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-sm shadow-md p-3 md:p-4 hover:shadow-xl transition relative flex flex-col justify-between"
                    >
                        <div className="flex flex-col">
                            {project.imageUrl && project.imageUrl.startsWith("http") ? (
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-32 sm:h-40 object-cover rounded mb-3"
                                />
                            ) : (
                                <Image
                                    src="/images/fallback.png"
                                    alt="Placeholder"
                                    width={400}
                                    height={250}
                                    className="w-full h-36 sm:h-40 object-cover rounded mb-3"
                                />
                            )}
                            <h2 className="text-sm md:text-base lg:text-lg font-semibold mb-1 truncate">Title: {project.title}</h2>
                            <p className="text-gray-700 mb-2 lg:text-base md:text-sm text-xs truncate">Description: {project.description}</p>
                            <p className="text-[10px] md:text-xs lg:text-sm text-gray-500 mb-2">Category: {project.category}</p>
                            <p className="text-[10px] md:text-[10px] lg:text-xs text-gray-400 mb-2">
                                Created: {new Date(project?.createdAt ?? Date.now()).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="mt-3 lg:mt-4 flex items-center gap-3">
                            <button
                                onClick={() => {
                                    setSelectedProject(project);
                                    setEditProject(true);
                                }}
                                className="flex-1 bg-green-500 text-white px-2 md:px-3 lg:px-4 py-2 rounded-lg text-[10px] md:text-xs lg:text-sm font-medium 
               hover:bg-green-600 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
                            >
                                Update
                            </button>

                            <button
                                onClick={() => {
                                    setIsDeleteOpen(true);
                                    setSelectedProject(project);
                                }}
                                className="flex-1 bg-red-500 text-white px-2 md:px-3 lg:px-4 py-2 rounded-lg text-[10px] md:text-xs lg:text-sm  font-medium 
               hover:bg-red-600 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            {selectedProject && (
                <EditProjectDialog
                    onClose={() => setEditProject(false)}
                    project={selectedProject}
                    open={editProject}
                />
            )}
            {selectedProject && (
                <DeleteProjectDialog
                    onClose={() => setIsDeleteOpen(false)}
                    open={isDeleteOpen}
                    projectId={selectedProject.id} />
            )}
        </div>
    );
}
