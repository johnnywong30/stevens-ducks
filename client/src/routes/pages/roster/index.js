import React from "react";
import { Text } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import Players from './Players'

const Roster = ({ players }) => {
    return (
        <>
            <Text>Roster</Text>
            {players.map((player) => (
                <Players name={name} role={role} year={year} major={major} />
            ))}
            <TableContainer>
                <Table variant='simple' colorScheme='red'>
                    <TableCaption>Stevens Ultimate Roster</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Year</Th>
                            <Th>Height</Th>
                            <Th>Weight(lbs)</Th>
                            <Th>Hometown</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Johnny</Td>
                            <Td>Senior</Td>
                            <Td>5'6"</Td>
                            <Td>158</Td>
                            <Td>Storm Point</Td>
                        </Tr>
                        <Tr>
                            <Td>Antonio Delrosso</Td>
                            <Td>Junior</Td>
                            <Td>6'10</Td>
                            <Td>179</Td>
                            <Td>Olympus</Td>
                        </Tr>
                        <Tr>
                            <Td>Ryan</Td>
                            <Td>Junior</Td>
                            <Td>3'5</Td>
                            <Td>230</Td>
                            <Td>King's Canyon</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Johnny</Td>
                            <Td>Senior</Td>
                            <Td>5'6"</Td>
                            <Td>158</Td>
                            <Td>Storm Point</Td>
                        </Tr>
                        <Tr>
                            <Td>Antonio Delrosso</Td>
                            <Td>Junior</Td>
                            <Td>6'10</Td>
                            <Td>179</Td>
                            <Td>Olympus</Td>
                        </Tr>
                        <Tr>
                            <Td>Ryan</Td>
                            <Td>Junior</Td>
                            <Td>3'5</Td>
                            <Td>230</Td>
                            <Td>King's Canyon</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Johnny</Td>
                            <Td>Senior</Td>
                            <Td>5'6"</Td>
                            <Td>158</Td>
                            <Td>Storm Point</Td>
                        </Tr>
                        <Tr>
                            <Td>Antonio Delrosso</Td>
                            <Td>Junior</Td>
                            <Td>6'10</Td>
                            <Td>179</Td>
                            <Td>Olympus</Td>
                        </Tr>
                        <Tr>
                            <Td>Ryan</Td>
                            <Td>Junior</Td>
                            <Td>3'5</Td>
                            <Td>230</Td>
                            <Td>King's Canyon</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                        <Tr>
                            <Td>Jeans</Td>
                            <Td>Junior</Td>
                            <Td>4'2</Td>
                            <Td>100</Td>
                            <Td>World's Edge</Td>
                        </Tr>
                    </Tbody>
                    {/* <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot> */}
                </Table>
            </TableContainer>
        </>
    )
}

export default Roster