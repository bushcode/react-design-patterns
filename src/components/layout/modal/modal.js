import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div``;

const ModalBody = styled.div``;

export const Modal = ({ children }) => {
	const [shouldShow, setShouldShow] = useState(false);

	return (
		<ModalBackground>
			<ModalBody>{children}</ModalBody>
		</ModalBackground>
	);
};
