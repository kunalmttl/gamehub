import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height={207} borderTopRadius="md"/>
        <Card.Body gap="4">
                <SkeletonText mt="4" noOfLines={2} />
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton
