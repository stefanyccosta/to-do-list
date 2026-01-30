import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, List, Check, CircleAlert } from "lucide-react";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardContent className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button className="cursor-pointer">
            {" "}
            <Plus /> Cadastrar
          </Button>
        </CardContent>
        <Separator />
        <div className="flex gap-2">
          <Badge className="cursor-pointer">
            {" "}
            <List />
            Todas
          </Badge>
          <Badge className="cursor-pointer">
            {" "}
            <CircleAlert />
            Não finalizadas
          </Badge>
          <Badge className="cursor-pointer">
            {" "}
            <Check />
            Concluídas
          </Badge>
        </div>
      </Card>
    </main>
  );
};
export default Home;
