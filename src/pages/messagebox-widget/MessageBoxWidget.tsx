import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button, Card, FieldGroup, Icon, RadioButton } from '@livechat/design-system';
import { createMessageBoxWidget, IMessageBoxWidget } from '@livechat/agent-app-sdk';
import '@livechat/design-system/dist/design-system.css';
import './MessageBoxWidget.css';
import templates, { Template } from './message-templates';

export default function MessageBoxWidget(): React.ReactElement {
  const [widgetInstance, setWidgetInstance] = useState<IMessageBoxWidget | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  useEffect(() => {
    createMessageBoxWidget().then((messageBoxWidget: IMessageBoxWidget) => {
      setWidgetInstance(messageBoxWidget);
    });
  }, []);

  useEffect(() => {
    const foundTemplate = templates.find((template) => template.id === selectedTemplate);
    if (foundTemplate) {
      widgetInstance?.putMessage(foundTemplate.message);
    }
  }, [selectedTemplate]);

  const onRadioChange = (id: string) => {
    setSelectedTemplate(id);
  };

  const radioButtons = templates.map((template: Template) => (
    <RadioButton
      id={template.id}
      checked={selectedTemplate === template.id}
      value={template.id}
      onChange={() => onRadioChange(template.id)}
      key={template.id}
    >
      {template.label}
    </RadioButton>
  ));

  return (
    <Card title="">
      <div className="custom-card-title">
        <span className="AppHeader">Select and send rich message</span>
        <div className="custom-card-title-link">
          <Link href="/pages/permissions" className="active">
            <Button kind="primary">Test app permissions</Button>
          </Link>
        </div>
      </div>
      <div style={{ margin: '0.8rem' }}>
        <FieldGroup>{...radioButtons}</FieldGroup>
      </div>
    </Card>
  );
}
