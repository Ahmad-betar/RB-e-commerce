import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  //   DialogHeader,
  //   DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const RhfDialog = ({
  content,
  trigger,
}: {
  content: ReactNode;
  trigger: ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default RhfDialog;
