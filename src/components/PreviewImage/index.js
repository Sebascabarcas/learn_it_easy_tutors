import React from 'react'
import { Modal, Icon, Card, Button } from 'antd'
// import styles from './style.module.scss'

class PreviewImage extends React.Component {
  state = {
    previewVisible: false,
  }

  componentWillMount() {
    this.getParams()
  }

  getParams = () => {
    const params = this.props
    this.setState({
      ...params,
    })
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handleDownload = url => () => window.open(`${url}`, '_blank')

  handlePreview = () => {
    this.setState({
      // previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleDelete = () => {
    const { dispatch, element, elementProps } = this.props
    switch (element) {
      case 'location':
        dispatch({
          type: 'locations/SET_LOCATION_STATE',
          payload: {
            picture: null,
          },
        })
        break
      case 'document':
        dispatch({
          type: 'offices/DELETE_DOCUMENT',
          payload: {
            id: elementProps.id,
            index: elementProps.index,
          },
        })

        break

      default:
        break
    }
  }
  // handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible } = this.state
    const { previewImage, canDelete, download, onDelete } = this.props
    const actions = [
      <Button type="primary" block onClick={this.handlePreview}>
        <Icon type="eye" />
      </Button>,
    ]
    if (canDelete)
      actions.push(
        <Button type="primary" block onClick={onDelete}>
          <Icon type="delete" />
        </Button>,
      )
    if (download)
      actions.push(
        <Button type="primary" block onClick={this.handleDownload(previewImage)}>
          <Icon type="download" />
        </Button>,
      )
    return (
      <div className="ant-row ant-form-item">
        {/* <p>Foto del evento</p> */}
        <Card
          className="ant-card-preview-image"
          style={{ width: 300 }}
          cover={<img alt="document" src={`${previewImage}`} />}
          actions={actions}
        />
        <Modal
          visible={previewVisible}
          footer={null}
          style={{ left: 0, top: 30 }}
          width="90%"
          onCancel={this.handleCancel}
        >
          <img
            alt="document-modal"
            style={{ width: '100%', margin: '20px 0' }}
            src={`${previewImage}`}
          />
        </Modal>
      </div>
    )
  }
}

export default PreviewImage
