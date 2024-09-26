import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const NewsLetterForm = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Input
        type="email"
        placeholder="Email address"
        className="rounded-none border-0 border-b-[1px] border-white font-normal text-white placeholder:font-normal placeholder:text-white focus-visible:ring-0 dark:border-white dark:text-white dark:placeholder:text-white"
      />
      <Button type="submit">Subscribe Now</Button>
    </div>
  )
}

export default NewsLetterForm
