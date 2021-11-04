import React, {PureComponent} from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default class HomePage extends PureComponent {
    render() {
        return (
            <div className="b-page">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Fhelper
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
