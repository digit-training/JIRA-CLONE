import React from "react";
import ViewTimelineTwoToneIcon from '@mui/icons-material/ViewTimelineTwoTone';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import CodeIcon from '@mui/icons-material/Code';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AddIcon from '@mui/icons-material/Add';

export const SidebarData = [
    {
        title: "Timeline",
        icon: <ViewTimelineTwoToneIcon />
    },
    {
        title: "Backlog",
        icon: <AddToQueueIcon />
    },
    {
        title: "Reports",
        icon: <AssessmentOutlinedIcon />
    },
    {
        title: "Issues",
        icon: <BugReportOutlinedIcon />
    },
    {
        title: "Components",
        icon: <GridViewIcon />
    },
    {
        title: "Code",
        icon: <CodeIcon />
    },
    {
        title: "Deployment",
        icon: <CloudUploadOutlinedIcon />
    },
    {
        title: "Project Pages",
        icon: <LayersOutlinedIcon />
    },
    {
        title: "Slack Integration",
        icon: <AddIcon />
    }
]