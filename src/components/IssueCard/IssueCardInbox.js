import React from 'react';
import { Card, CardContent, Typography, Chip, Grid } from '@mui/material';

const IssueCardInbox = ({ processInstance }) => {
    return (
        <Card variant="outlined" sx={{ marginBottom: '20px' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Business Service: {processInstance?.businessService}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">Business ID: {processInstance?.businessId}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Action: {processInstance?.action}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">State: {processInstance?.state?.state}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default IssueCardInbox;
