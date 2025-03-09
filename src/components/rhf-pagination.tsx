import { Button } from "@/components/ui/button";
import { t } from "i18next";

interface PaginationProps {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onPageChange: (page: number) => void;
}

const RHFPagination = ({
  page,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <Button
        variant="outline"
        disabled={!hasPreviousPage}
        onClick={() => onPageChange(page - 1)}
      >
        {t("pagination.prev")}
      </Button>
      <span className="text-sm">
        {page} / {totalPages}
      </span>
      <Button
        variant="outline"
        disabled={!hasNextPage}
        onClick={() => onPageChange(page + 1)}
      >
        {t("pagination.next")}
      </Button>
    </div>
  );
};

export default RHFPagination;
