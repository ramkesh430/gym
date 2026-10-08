import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/frontend/pages/home";

export const Route = createFileRoute("/")({ component: Home });
