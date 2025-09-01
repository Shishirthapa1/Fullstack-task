"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react'


export type Project = {
    id: string
    title: string
    slug: string
    description: string
    tags: string[]
    imageUrl?: string | null
    repoUrl?: string | null
    demoUrl?: string | null
    featured: boolean
    createdAt: string
    updatedAt: string
}


type Ctx = {
    projects: Project[]
    refresh: () => Promise<void>
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}


const ProjectsContext = createContext<Ctx | null>(null)


export function ProjectsProvider({ children }: { children: React.ReactNode }) {
    const [projects, setProjects] = useState<Project[]>([])


    const refresh = async () => {
        const res = await fetch('/api/projects', { cache: 'no-store' })
        const data = (await res.json()) as Project[]
        setProjects(data)
    }


    useEffect(() => { refresh() }, [])


    const value = useMemo(() => ({ projects, refresh, setProjects }), [projects])
    return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
}


export function useProjects() {
    const ctx = useContext(ProjectsContext)
    if (!ctx) throw new Error('useProjects must be used inside ProjectsProvider')
    return ctx
}