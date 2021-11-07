import React, {PureComponent} from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function createData(name, currency, balance, balanceRubs) {
    return { name, currency, balance, balanceRubs };
}

const rows = [
    createData('Cash', '\u20BD', 1000, 1000),
    createData('Alfa account', '\u20BD', 1000, 1000),
    createData('Tinkoff account', '\u20BD', 1000, 1000),
    createData('Deposit', '\u20BD', 1000, 1000),
    createData('Broker', '\u20BD', 1000, 1000),
];
export default class HomePage extends PureComponent {
    render() {
        return (
            <div className="b-page b-page_background">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Fhelper
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{ flexGrow: 1, p: 2 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={8}>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Account Name</TableCell>
                                            <TableCell align="right">Currency</TableCell>
                                            <TableCell align="right">Balance</TableCell>
                                            <TableCell align="right">Balance, &#8381;</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.currency}</TableCell>
                                            <TableCell align="right">{row.balance}</TableCell>
                                            <TableCell align="right">{row.balanceRubs}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow className="boldText" selectable={false} style={{verticalAlign: 'middle'}}>
                                            <TableCell colSpan="2"></TableCell>
                                            <TableCell align="right">Total:</TableCell>
                                            <TableCell align="right">{33333}</TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    }
}
