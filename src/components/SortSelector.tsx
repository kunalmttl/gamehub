import { Button, Menu, Portal } from "@chakra-ui/react"
import { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs"

const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: 'name', label: 'Name'},
        {value: '-added', label: 'Date Added'},
        {value: '-rating', label: 'Average Rating'},
        {value: '-released', label: 'Release Date'},
        {value: 'metacritic', label: 'Popularity'},

];


interface Props
{
        onSelectSortOrder: (sortOrder: string) => void;
        sortOrder: string;
}


const SortSelector = ({onSelectSortOrder, sortOrder} : Props) => {


        const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
        useEffect(() => 
        {
                if (!currentSortOrder) 
                {
                onSelectSortOrder(sortOrders[0].value);
                }
        }, [currentSortOrder, onSelectSortOrder]);



  return (
          <>
          <Menu.Root size={'sm'}>
                  <Menu.Trigger asChild>
                          <Button variant="subtle" size="xs" marginX={-50}>
                                  Order by: {currentSortOrder ? currentSortOrder.label : 'Relevance'}
                                  <BsChevronDown/>
                          </Button>
                  </Menu.Trigger>
                  <Portal>
                          <Menu.Positioner>
                                  <Menu.Content>
                                        {sortOrders.map(order => (
                                                        <Menu.Item onClick = {() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                                                                {order.label}
                                                        </Menu.Item>
                                        ))}
                                  </Menu.Content>
                          </Menu.Positioner>
                  </Portal>
          </Menu.Root>
          </>
  )
}

export default SortSelector
