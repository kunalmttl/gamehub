import { Input, InputGroup } from "@chakra-ui/react"
import { useRef } from "react";
import { BsSearch } from "react-icons/bs"

interface SearchInputProps {
  onSearch: (searchTerm: string) => void; 
}

const SearchInput = ({onSearch}: SearchInputProps) => {

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) =>
    {
      e.preventDefault(); 
      if (ref.current) {
        const searchTerm = ref.current.value;
        onSearch(searchTerm);
      }
      // Handle search logic here
    }}>
      <InputGroup marginLeft={4} startElement={<BsSearch />}>
        <Input ref={ref} rounded={20} marginLeft={0} size="2xs" placeholder="Search" />
      </InputGroup>
    </form>
  )
}

export default SearchInput
