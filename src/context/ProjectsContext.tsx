"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast';


export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl?: string;
    createdAt?: string;

}

interface ProjectsContextType {
    projects: Project[];
    fetchProjects: () => Promise<void>;
    addProject: (p: Omit<Project, "id">) => Promise<void>;
    updateProject: (id: number, p: Partial<Project>) => Promise<void>;
    deleteProject: (id: number) => Promise<void>;
}


const ProjectsContext = createContext<ProjectsContextType | null>(null)


export function ProjectsProvider({ children }: { children: React.ReactNode }) {
    const [projects, setProjects] = useState<Project[]>([])


    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/projects", { cache: "no-store" });
            if (!res.ok) throw new Error("Failed to fetch projects");
            const data = (await res.json()) as Project[];
            setProjects(data);
        } catch (err) {
            console.error(err);
            toast.error("Failed to load projects");
        }
    };

    const addProject = async (p: Omit<Project, "id" | "createdAt">) => {
        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(p),
            });
            if (!res.ok) throw new Error("Failed to add project");
            toast.success("Project added successfully");
            await fetchProjects();
        } catch (err) {
            console.error(err);
            toast.error("Failed to add project");
        }
    };

    const updateProject = async (id: number, p: Partial<Project>) => {
        try {
            const res = await fetch(`/api/projects/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(p),
            });
            if (!res.ok) throw new Error("Failed to update project");
            toast.success("Project updated successfully");
            await fetchProjects();
        } catch (err) {
            console.error(err);
            toast.error("Failed to update project");
        }
    };

    const deleteProject = async (id: number) => {
        try {
            const res = await fetch(`/api/projects/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete project");
            toast.success("Project deleted successfully");
            await fetchProjects();
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete project");
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);


    const value = useMemo(() => ({ projects, fetchProjects, addProject, updateProject, deleteProject }), [projects])
    return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
}


export function useProjects() {
    const context = useContext(ProjectsContext)
    if (!context) throw new Error('useProjects must be used inside ProjectsProvider')
    return context
}