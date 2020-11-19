import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Buying from 'templates/Buying/Buying';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'modules/user.action';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  location: {
      padding: '80px',
      height: '600px'
  }
}));


export default function Review() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const payment = useSelector(state => (state.userReducer.payment))
  const rows = payment

  useEffect(() => {
    // dispatch(userActions.getAll())
  }, [])

  return (<Buying>
    <div className={classes.location}>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">종목명</TableCell>
            <TableCell align="center">매매타입</TableCell>
            <TableCell align="center">날짜</TableCell>
            <TableCell align="center">가격</TableCell>
            <TableCell align="center">개수</TableCell>
            <TableCell align="center">수익률</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.count}</TableCell>
              <TableCell align="center">{row.profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </Buying>
  );
}