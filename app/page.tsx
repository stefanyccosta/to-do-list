"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  Check,
  CircleAlert,
  Trash,
  ListCheck,
  Sigma,
} from "lucide-react";

import EditTask from "@/components/edit-task";
import { getTasks } from "@/actions/get-tasks-from-db";
import { useEffect, useState } from "react";
import { Tasks } from "@/lib/generated/prisma/client";

const Home = () => {
  const [taskList, setTaskList] = useState<Tasks[]>([]);
  const handleGetTasks = async () => {
    const tasks = await getTasks();
    if (!tasks) return;
    setTaskList(tasks);
  };
  useEffect(() => {
    handleGetTasks();
  }, []);
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button className="cursor-pointer">
            {" "}
            <Plus /> Adicionar
          </Button>
        </CardHeader>
        <Button onClick={handleGetTasks}>Buscar Tarefas </Button>
        <CardContent>
          <Separator className="mb-4" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant={"default"}>
              {" "}
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant={"outline"}>
              {" "}
              <CircleAlert />
              Não finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant={"outline"}>
              {" "}
              <Check />
              Concluídas
            </Badge>
          </div>
          <div className=" mt-4 border-b">
            {taskList.map((task) => (
              <div
                className="h-14 flex justify-between items-center border-t"
                key={task.id}
              >
                <div className="w-1 h-full bg-green-300"></div>
                <p className="flex-1 px-2 text-sm"> Estudar React</p>
                <div className="flex items-center gap-2">
                  <EditTask />
                  <Trash size={16} className="cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={20} />
              <p className="text-xs">Tarefas concluídas (3/3)</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="text-xs h-7 cursor-pointer"
                  variant={"outline"}
                >
                  {" "}
                  <Trash /> Limpar tarefas concuidas
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir x itens?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Sim</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full  bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
            <div className="flex justify-end items-center mt-2 gap-2">
              <Sigma size={16} />
              <p className="text-xs">3 tarefas no total</p>
            </div>
          </div>
        </CardContent>
        <div></div>
      </Card>
    </main>
  );
};
export default Home;
