import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DiaLog({setDiaLog}) {
    const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDiaLog(true);
    history.push("/");
  };

  return (
    <div>
      <Dialog
        open='true'
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Đặt hàng thành công!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bạn đã đặt hàng thành công.<br/> 
            Chúng tôi sẽ sớm liên hệ với bạn để xác nhận thông tin đơn hàng. <br/> 
            Mời bạn kiểm tra Email của mình để xác nhận thông tin liên hệ.<br />
            Chúng tôi sẽ chuyển bạn về trang chủ của "YOLO"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}