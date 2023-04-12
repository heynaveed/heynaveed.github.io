import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function VersionControl(){
    const Versioncontrol = [
        {
            id: 1,
            image: 'https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png',
            title: 'Git Hub'
        },
        {
            id: 2,
            image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
            title: 'Git'
        }
    ]
    return(
        <>
         <Flex m='auto' mt={{base : '20px', md :'45px' , lg :'40px' }} justifyContent='space-between'  w={{base : '40%', md : '35%', lg : '20%'}} fontSize={{ base: '12px', md: '14px' }} fontWeight='600'>  
                        {Versioncontrol.map((elem) => {
                            return <Box m='auto' mt={{ base: '20px', md: '30px', lg: '6' }} key={elem.id}>
                                 <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto' src={elem.image}shadow='lg' />
                                <Text textAlign='center' mt={{base : '10px', lg : '15px'}}>{elem.title}</Text>
                            </Box>
                        })}
        </Flex>
        </>
    )
}