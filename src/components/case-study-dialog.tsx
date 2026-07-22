import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type CaseStudyDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  imageSrc?: string;
};

export function CaseStudyDialog({ open, onOpenChange, title, imageSrc }: CaseStudyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[90vh] max-w-3xl flex-col overflow-hidden border-white/10 bg-background/95 p-0 sm:rounded-2xl">
        <DialogHeader className="shrink-0 p-6 pb-4">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Case study preview</DialogDescription>
        </DialogHeader>
        {imageSrc ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6">
            <img
              src={imageSrc}
              alt={`${title} case study`}
              className="h-auto w-full rounded-xl border border-white/10"
            />
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
