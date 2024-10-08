import { useState } from "react";
import { useWeb3 } from "@/hooks/useWeb3";
import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"
import { Loader2 } from "lucide-react"



function ComputeLRScoreButton({ className = "", disabledState = false, taskId, forceUpdate}) {

  const {wallet, computeLastRoundScore} = useWeb3();

  const [open, setOpen] = useState(false);
  const [loadingBtn, setloadingBtn] = useState(false);

  async function onSubmit(){
    setloadingBtn(true);
    const res = await computeLastRoundScore(taskId);
    if (res) {
      setOpen(false);
      alert("Transaction successful");
      //window.location.reload();
      forceUpdate((k) => k + 1);
    }else alert("Transaction canceled or denied.");
    setloadingBtn(false);
  }

  function handleOpenChanging() {
    if (open == false && ! wallet.accounts.length > 0) {        
      setOpen(false);
      alert("Please, connect your account first.");
    }else setOpen(!open);

  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChanging}>
      <DialogTrigger asChild onClick={(e) => {e.stopPropagation()}}>
        <Button className={` ${className}`} disabled={disabledState}>Compute Score</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[470px]">
        <DialogHeader>
          <DialogTitle>Do you want to compute your score for the last round?</DialogTitle>
          <DialogDescription>
            This action can not be revoked.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          {loadingBtn ? 
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
          : <Button type="submit" onClick={onSubmit}>Compute Score</Button>
          }
          
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ComputeLRScoreButton;