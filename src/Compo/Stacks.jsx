import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function  GitStats  ( ) {
    return (
      <>
      <Text textAlign='center' fontSize={{base : '12px',md: '18px', lg : '20px'}} fontWeight={{base : '600', md : '600'}} mt={{base : '50px', md : '80px', lg :'55px'}} letterSpacing={{base : '3px'}}>GITHUB STATS</Text>
      <Flex width={{base : '75%', md : '85%', lg  :'70%'}} m='auto' direction={{base : 'column-reverse', md : 'row'}} justifyContent='center' alignItems='center' mt={{base : '10px', md : '30px', lg : '50px'}} gap={{base : '15px', md : '35px', lg : '70px'}}>
        <Box>
            <a href="https://github.com/heynaveed">
                    <Image width={{base : '250px', md : '480px', lg : '500px'}} src="https://github-readme-streak-stats.herokuapp.com/?user=heynaveed"/>
                </a>
        </Box>

        <Box>
        <a href="https://github.com/heynaveed">
                <Image width={{base : '300px', md : '490px', lg : '500px'}} src="https://github-readme-stats-eight-theta.vercel.app/api?username=heynaveed&show_icons=true&theme=light&include_all_commits=true&count_private=true"/>
            </a>
        </Box>
      </Flex>

     <Flex  w={{base : '70%', md : '80%', lg :'30%'}}  m='auto' mt={{base : '15px', md :'25px'}} justifyContent='center' alignItems='center'> 
        <Box>
            <a href="https://github.com/heynaveed">
                <Image width={{base : '250px', md : '260px', lg : '350px'}} src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=heynaveed&layout=compact&langs_count=5&theme=light"/>
            </a>
        </Box>
     </Flex>
      </>
    );
  };