import {Header , Form} from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-between p-10 flex-col">
        <Header />
        <Form />
    </main>
  );
}
