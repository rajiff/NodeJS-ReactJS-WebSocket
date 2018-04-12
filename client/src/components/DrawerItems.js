import React from 'react'
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DashboardIcon from 'material-ui-icons/Dashboard';
import NoteAddIcon from 'material-ui-icons/NoteAdd';
import DescriptionIcon from 'material-ui-icons/Description';
import ListIcon from 'material-ui-icons/List';

export default class DrawerItems extends React.Component {
	constructor(props) {
		super(props);

		this.items = [{
			name: 'Home',
			icon: <DashboardIcon />,
			link: '/welcome'
		}, {
			name: 'Add an Article',
			icon: <NoteAddIcon />,
			link: '/articles/new'
		}, {
			name: 'View an Article',
			icon: <DescriptionIcon />,
			link: '/articles/:link/details'
		}, {
			name: 'List the Articles',
			icon: <ListIcon />,
			link: '/articles/'
		}]
	}

	static propTypes = {
		onClick: PropTypes.func.isRequired
	}

	render() {
		return (
			this.items.map((item) => {
					return (
						<ListItem key={item.name} component={Link} to={item.link} onClick={this.props.onClick} button>
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
					)
				})
		)
	}
}