"use client";

import { Button } from "@/components/ui/button";
import { getTeacher } from "@/lib/storage";
import { logoutTeacher } from "@/lib/auth-log-out";
import { useEffect, useState } from "react";

type Teacher = {
  id: string;
  username: string;
  email: string;
};

const Dashboard = () => {
  const [teacher, setTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const currTeacher = getTeacher();
    if (!currTeacher) {
      logoutTeacher();
    } else {
      setTeacher(currTeacher);
    }
  }, []);

  if (!teacher) return null;

  return (
    <div className="flex flex-col min-h-screen justify-between items-center p-4">
      <div className="text-center mt-10">
        <h1 className="text-2xl font-semibold">
          Chào mừng, {teacher.username}!
        </h1>
        <p className="text-sm text-muted-foreground mt-2">{teacher.email}</p>
      </div>

      <Button
        variant="outline"
        className="mt-8 mb-4"
        onClick={() => logoutTeacher()}
      >
        Log out
      </Button>
    </div>
  );
};

export default Dashboard;
