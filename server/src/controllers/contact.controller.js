import ContactMessage from '../models/ContactMessage.js';

// @desc    Submit a new contact message
// @route   POST /api/contact/submit
// @access  Public
export const submitContactMessage = async (req, res) => {
  try {
    const { name, organization, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    const newMessage = await ContactMessage.create({
      name,
      organization,
      email,
      phone,
      message,
    });

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact/all
// @access  Private/Admin
export const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update message status
// @route   PATCH /api/contact/:id/status
// @access  Private/Admin
export const updateMessageStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const message = await ContactMessage.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    message.status = status;
    const updatedMessage = await message.save();

    res.status(200).json({ success: true, data: updatedMessage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
export const deleteMessage = async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    await message.deleteOne();
    res.status(200).json({ success: true, message: 'Message removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
