import Button from "@/component/Button";
import { type FC } from "react";

interface pageProps {
  name: number;
}

const page: FC<pageProps> = async () => {

    
  return (
    <div>
      <Button />
    
    </div>
  );
};
export const metadata = {
  title: "page",
  description: "page description",
};
export default page;
