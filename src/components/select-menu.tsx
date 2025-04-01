import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export async function SelectScrollable({
  categories,
}: {
  categories: string[];
}) {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Category' />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem value={category}>{category}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
