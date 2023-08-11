import React from 'react';
import { Card, CardContent, Typography, Chip, Grid } from '@mui/material';

const IssueCard = ({ formData }) => {
    return (
        <Card variant="outlined" sx={{ marginBottom: '20px' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            {formData.Issue} - {formData.summary}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">Project: {formData.Project}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Status: {formData.Status}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Components: {formData.Components}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">Labels:</Typography>
                        <Chip label={formData.Labels} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">Message: {formData.message}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default IssueCard;
