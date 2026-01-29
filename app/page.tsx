import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <Input />
        <Button>Cadastrar</Button>
      </Card>
    </main>
  );
};
export default Home;
